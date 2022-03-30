import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { base_requests, requests } from "../requests/request";
import ReactTableDragColumnRow from "../components/DraggableTable";
import { useState } from "react";
import { csv_2_json } from '../lib/csv'

export async function getServerSideProps() {
    // ランダムに単語を取得するAPI
    // base_requests.RandomWords.url => another api
    const test = await fetch('http://localhost:3000/csv/toeic.csv');
    const csv = await test.text();
    console.log(csv_2_json(csv));
    const res = await fetch('http://localhost:3000/api/kikutan');  
    const words = await res.json();
    const words_list = [];
    let column = 0;
    // https://qiita.com/kerupani129/items/6bb14acb2213179156a2#32-array---arrayprototypeentries
    for (const [index, word] of words.entries()) {
      words_list[index] = [];
      words_list[index][column] = word;
    }
    column += 1;

    const search_query = words.join(', ');

    for (const country in requests) {
      const res = await fetch(`${requests[country]['url']}&text=${search_query}`);
      const words_string = await res.json();
      const words = words_string.translations[0].text.split(/[,、，]/g);
      for (const [index, word] of words.entries()) {
        words_list[index][column] = word;
      }
      column++;
    }

    return {
      props: {
        words_list,
      }
    }
}

export default function Home({words_list}) {
    let [data, setData] = useState({
      heads: ['English', 'Japanese', 'Germany', 'Frech', 'Italian', 'Spanish', 'Chinese', 'Russian'],
      rows: words_list,
    });

    return (
      <div>
        <h1>react table drag column row</h1>
        <ReactTableDragColumnRow
          heads={data.heads}
          rows={data.rows}
          onDragEnd={(type, from, to, newData) => {
            console.log({
              type,
              from,
              to,
              newData
            });
            setData(newData);
          }}
        />
      </div>
    )
}
