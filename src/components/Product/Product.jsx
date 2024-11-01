import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Обои бумажные однотонные с мелким узором песочные безы',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13',
        quantity: 2,
        category: 'Бумажные'
    },

    {
        id: 2,
        title: 'Обои бумажные однотонные с мелким узором песочные безы',
        price: 1800,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=5d08f76705419a7df6264036e971efb71c2e96245ae9a323-10236784-images-thumbs&n=13',
        quantity: 7,
        category: 'Бумажные'
    },
    {
        id: 3,
        title: 'Обои PALITRA LIFE',
        price: 800,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=383cc2ff69ab030f01ce165ffd7df575941872cd-11521919-images-thumbs&n=13',
        quantity: 1,
        category: 'Виниловые'
    },
    {
        id: 4,
        title: 'Обои виниловые Industry Chloe',
        price: 3200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=590474c0f2755d16918b9b2fd437458ae7debad5-4285843-images-thumbs&n=13',
        quantity: 1,
        category: 'Виниловые'
    },

    {
        id: 5,
        title: 'Обои Ateliero Paradise',
        price: 5500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=85076282526303c31c117e94fe72f0c1_l-5299516-images-thumbs&n=13',
        quantity: 2,
        category: 'Флизелиновые'
    },
    {
        id: 6,
        title: 'Обои MaxWall',
        price: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=ad9b5be70e1f1d7673cd6fa9789a281b3fef55081fd7c534-12190868-images-thumbs&n=13',
        quantity: 5,
        category: 'Флизелиновые'
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}