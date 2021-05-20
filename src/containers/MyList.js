import axios from 'axios';
import React, { useState, useEffect } from 'react';

import styles from './ToDos.module.css';
import Spinner from '../components/Spinner';

const MyList = (props) => {
    const [currentLists, setLists] = useState({
        lists: [],
        loading: true
    });

    useEffect(() => {
        setLists({
            ...currentLists,
            loading: true
        });
        axios.get('https://to-do-app-d5136-default-rtdb.firebaseio.com/lists.json')
            .then(response => {
                const fetchedLists = [];
                for (let key in response.data) {
                    fetchedLists.push({
                        ...response.data[key],
                        listID: key
                    })
                }

                setLists({
                    ...currentLists,
                    lists: fetchedLists,
                    loading: false
                });
                if (currentLists.loading === false) {
                    console.log(currentLists);
                } //somehow this is not updated
            })
            .catch(error => {
                setLists({
                    ...currentLists,
                    loading: false
                });
            });
        if (currentLists.loading === false) {
            console.log(currentLists);
        }

    }, []);

    let updatedLists = <Spinner />;
    if (currentLists.loading === false) updatedLists = currentLists.lists.map((list, index) => {
        let updatedList = Object.keys(list).map((key) => {
            const todo = list[key];
            return <li key={todo.id}>ToDo: {todo.value}</li>
        });

        return <div key={list.listID} className={styles.ToDo}>
            <h5>List #{index + 1}</h5>
            {updatedList}
        </div>
    });

    return (
        <div className={props.itemStyle}>
            {updatedLists}
        </div>
    )
};

export default MyList;