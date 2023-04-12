import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios';

export const TablesWorkShop = () => {

    const [data, setData] = useState([])

    const [counter, setCounter] = useState(1);

    useEffect(() => {
      const fetchData = async ()=>{
        const result = await axios('http://34.201.151.124:4000/shop/service');
        setData(result.data);
        console.log('obtenido aq =>',result.data);
      };
      fetchData();
    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead style={styles.TableThead}>
                    <tr style={styles.TableCabecera}>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody style={styles.Text}>
                {data.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{new Date (item.createdAt).toLocaleString().replace('T','').slice(0,8)}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    )
}

const styles = {
    TableThead: {
        backgroundColor: "#255770",
        padding: "100px",
    },
    TableCabecera: {
        color: "white",
        fontSize: "15px",
        fontWeight: "SemiBold",
        fontfamily: "Inter",
        textAlign: "center",
    },
    Text: {
        fontfamily: "Inter",
        fontSize: "15px",
        fontWeight: "SemiBold",
        textAlign: "center",
    },
    Icon: {
        height: "auto",
        width: "30px",
        marginRight: "10px",
    },
}