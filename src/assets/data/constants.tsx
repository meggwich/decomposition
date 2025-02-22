import HeadlineType from "../../types/HeadlineType";
import LinkItemType from "../../types/LinkItemType";
import ShareType from "../../types/ShareType";

export const headlines: HeadlineType[] = [
    {
        iconLink: './src/assets/icon.jpg',
        title: 'Новость 1: Что-то интересное произошло',
        link: 'https://example.com/news1'
    },
    {
        iconLink: './src/assets/icon.jpg',
        title: 'Новость 2: Еще одно важное событие',
        link: 'https://example.com/news2'
    },
    {
        iconLink: './src/assets/icon.jpg',
        title: 'Новость 3: Невероятные открытия',
        link: 'https://example.com/news3'
    }
];


export const shares: ShareType[] = [
    {
        currency: 'USD MOEX',
        quote: 63.52,
        change: '+ 0,09'
    },
    {
        currency: 'EUR MOEX',
        quote: 70.86,
        change: '+ 0,14'
    },
    {
        currency: 'Нефть',
        quote: 64.90,
        change: '+ 1,63%'
    }

];


export const newsCategories: LinkItemType[] = [
    {
        link: 'https://example.com/news1',
        name: 'Сейчас в СМИ',
    },
    {
        link: 'https://example.com/news2',
        name: 'в Германии',
    },
    {
        link: 'https://example.com/news3',
        name: 'Рекомендуем',
    }

];

export const navbarItems: LinkItemType[] = [
    {
        link: 'https://example.com/news1',
        name: 'Видео',
    },
    {
        link: 'https://example.com/news2',
        name: 'Картинки',
    },
    {
        link: 'https://example.com/news3',
        name: 'Новости',
    },
    {
        link: 'https://example.com/news3',
        name: 'Карты',
    },
    {
        link: 'https://example.com/news3',
        name: 'Маркет',
    },
    {
        link: 'https://example.com/news3',
        name: 'Переводчик',
    },
    {
        link: 'https://example.com/news3',
        name: 'Эфир',
    },
    {
        link: 'https://example.com/news3',
        name: 'ещё',
    }

];