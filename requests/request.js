const deepl_base_url = 'https://api-free.deepl.com/v2/translate?auth_key=7aed5fcf-8593-6844-0d5e-ee409fe84cd9%3Afx&source_lang=en&tag_handling=0'

export const base_requests = {
    RandomWords: {
        url: 'https://random-word-api.herokuapp.com/word?number=3&swear=1',
    },
};

export const requests = {
    JapaneseWords: {
        url: `${deepl_base_url}&target_lang=ja`, 
    },
    GermanWords: {
        url: `${deepl_base_url}&target_lang=de`, 
    },
    FrechWords: {
        url: `${deepl_base_url}&target_lang=fr`, 
    },
    ItalianWords: {
        url: `${deepl_base_url}&target_lang=it`, 
    },
    SpanishWords: {
        url: `${deepl_base_url}&target_lang=es`, 
    },
    ChineseWords: {
        url: `${deepl_base_url}&target_lang=zh`, 
    },
    RussianWords: {
        url: `${deepl_base_url}&target_lang=ru`, 
    }
};