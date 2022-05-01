import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RenderListShop.module.css';

interface ListShopData {
    name: string;
    address: string;
    district: string;
    id: string;
}

const RenderListShop: React.FC<{ api: string, area: string }> = ({ api, area }) => {
    const [data, setData] = useState<ListShopData[]>([]);

    async function fetchData(api: string) {
        const response = await axios(api);
        const listShop = await response.data;
        setData(listShop);
    }

    useEffect(() => {
        fetchData(api);
    }, [])

    return (
        <div className={styles.list_shop}>
            <h3 className={styles.title}>{`danh sách cửa hàng ${area}`}</h3>
            <table className={styles.list_shop_container}>
                <thead>
                    <th className={styles.number}>STT</th>
                    <th className={styles.shop_name}>CỬA HÀNG</th>
                    <th className={styles.address}>ĐỊA CHỈ</th>
                    <th className={styles.district}>QUẬN/TP</th>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.address}</td>
                            <td>{data.district}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RenderListShop