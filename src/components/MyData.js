import React from 'react';
import { useQuery } from 'react-query';
import useMyStore from '../App/MyStore';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    const data = await res.json();
    return data.results
}


const People = () => {

    const { myData, setMyData } = useMyStore(
        (state) => ({
            myData: state.myData,
            setMyData: state.setMyData
        })
    )

    const { data, status } = useQuery('people', fetchPeople, { onSuccess: data => setMyData(data) });

    console.log('mydata', myData.myData);

    return (
        <div>
            <h2>People</h2>
            {status === "loading" && (<p>Loading Data..</p>)}
            {status === "error" && (<p>Error Fetching Data!!</p>)}
            {status === "success" && (<div>
                {myData.myData.map(people => <div>{people.name}</div>)}
            </div>)}
        </div>
    );
}

export default People;