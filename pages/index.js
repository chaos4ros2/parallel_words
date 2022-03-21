import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { requests } from "../requests/request";
import ReactTableDragColumnRow from "../components/DraggableTable";
import { useState } from "react";

export async function getServerSideProps() {
  // ランダムに単語を取得するAPI
  const res = await fetch(requests.RandomWords.url);
  const words = await res.json();

  console.log(words);

  return {
    props: {
      words,
    }
  }
}

export default function Home({words}) {
  let [data, setData] = useState({
    heads: ['English', 'Germany'],
    rows: [
      [words[0], words[5]],
      [words[1], words[6]],
      [words[2], words[7]],
      [words[3], words[8]],
      [words[4], words[9]],
    ]
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
