import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';

export const TablesCategory = () => {

    const [data, setData] = useState([])

    const [counter, setCounter] = useState(1);

    useEffect(() => {
      const fetchData = async ()=>{
        const result = await axios('http://52.91.164.191:5000/shop/category');
        setData(result.data);
        console.log('obtenido=>',result.data);
      };
      fetchData();
    }, [])
    return (
        <>
            <Table striped bordered hover>
                <thead style={styles.TableThead}>
                    <tr style={styles.TableCabecera}>
                        <th>Nombre</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody style={styles.Text}>
                    {data.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{new Date (item.createdAt).toLocaleString().replace('T','').slice(0,9)}</td>
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
