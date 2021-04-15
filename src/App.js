import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Confirm from './components/Confirm';
import Form from './components/Form';
import Overview from './components/Overview';
import Places from './components/Places';
import data from './data.json';

const App = () => {
    const [areas, setAreas] = useState([]);
    const [curArea, setCurArea] = useState();
    const [formData, setFormData] = useState()
    useEffect(() => {
        setAreas(data);
    }, []);

    const selected = (val) => {
        setCurArea(areas[val - 1]);
    }
    const handleFormData = (formVal) => {
        // console.log(formVal);
        setFormData(formVal);
    }

    return (
        <Switch>
            <Route path='/' exact>
                <Places areas={areas} selected={selected} />
            </Route>
            <Route path='/overview'>
                <Overview location={curArea} />
            </Route>
            <Route path='/application'>
                <Form location={curArea} allFormData={handleFormData} />
            </Route>
            <Route path='/confirm'>
                <Confirm data={formData} />
            </Route>
        </Switch>
    )
}

export default App;
