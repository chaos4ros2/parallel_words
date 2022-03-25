const base_url = 'https://api-free.deepl.com/v2/translate?auth_key=7aed5fcf-8593-6844-0d5e-ee409fe84cd9%3Afx&source_lang=en&tag_handling=0'

export const requests = {
    RandomWords: {
        url: 'https://random-word-api.herokuapp.com/word?number=10&swear=1',
    },
    JapaneseWords: {
        url: `${base_url}&target_lang=ja`, 
    },
    GermanWords: {
        url: `${base_url}&target_lang=de`, 
    },
    FrechWords: {
        url: `${base_url}&target_lang=fr`, 
    },
    ItalianWords: {
        url: `${base_url}&target_lang=it`, 
    },
    SpanishWords: {
        url: `${base_url}&target_lang=es`, 
    },
    ChineseWords: {
        url: `${base_url}&target_lang=zh`, 
    },
    RussianWords: {
        url: `${base_url}&target_lang=ru`, 
    }
};