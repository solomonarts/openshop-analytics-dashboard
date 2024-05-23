import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
]

export const products = [
    {
        // image: bgpics['vanilla.png'],
        id: '001',
        title: 'Probiotic Vanilla Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['strawberry.png'],
        id: '002',
        title: 'Probiotic Strawberry Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['natural.png'],
        id: '003',
        title: 'Probiotic Natural Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // { image: bgpics['mango.png'],
        id: '004',
        title: 'Probiotic Mango Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['passion.png'],
        id: '005',
        title: 'Probiotic Passion Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['blackcurrant.png'],
        id: '006',
        title: 'Probiotic Blackcurrant Yoghurt',
        price: 230,
        variations: '1 Litre, 2 Litres, 5 litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['vanilla1l.jpg'],
        id: '007',
        title: 'Available in 1 ltr',
        price: 230,
        variations: '1 Litre',
        product_stock: 'Available'
    },
    {
        // image: bgpics['vanilla2l.jpg'],
        id: '008',
        title: 'Available in 2 ltr',
        price: 230,
        variations: '2 Litres',
        product_stock: 'Available'
    },
    {
        // image: bgpics['vanilla5l.jpg'],
        id: '009',
        title: 'Available in 5 ltr',
        price: 230,
        variations: '5 litres',
        product_stock: 'Available'
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
