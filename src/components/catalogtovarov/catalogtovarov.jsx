import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Обои бумажные однотонные с мелким узором песочные безы',
        price: 1500,
        image: 'https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13',
        quantity: 2,
        category: 'Бумажные'
    },

    {
        id: 2,
        title: 'Обои бумажные однотонные с мелким узором песочные безы',
        price: 1800,
        image: 'https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13',
        quantity: 7,
        category: 'Бумажные'
    },
    {
        id: 3,
        title: 'Обои PALITRA LIFE',
        price: 800,
        image: 'https://avatars.mds.yandex.net/i?id=383cc2ff69ab030f01ce165ffd7df575941872cd-11521919-images-thumbs&n=13',
        quantity: 1,
        category: 'Виниловые'
    },
    {
        id: 4,
        title: 'Обои виниловые Industry Chloe',
        price: 3200,
        image: 'https://avatars.mds.yandex.net/i?id=590474c0f2755d16918b9b2fd437458ae7debad5-4285843-images-thumbs&n=13',
        quantity: 1,
        category: 'Виниловые'
    },

    {
        id: 5,
        title: 'Обои Ateliero Paradise',
        price: 5500,
        image: 'https://avatars.mds.yandex.net/i?id=85076282526303c31c117e94fe72f0c1_l-5299516-images-thumbs&n=13',
        quantity: 2,
        category: 'Флизелиновые'
    },
    {
        id: 6,
        title: 'Обои MaxWall',
        price: 900,
        image: 'https://avatars.mds.yandex.net/i?id=ad9b5be70e1f1d7673cd6fa9789a281b3fef55081fd7c534-12190868-images-thumbs&n=13',
        quantity: 5,
        category: 'Флизелиновые'
    }
    
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Бумажные">Бумажные</option>
                <option value="Флизелиновые">Флизелиновые</option>
                <option value="Виниловые">Виниловые</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}