import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Confirm from './components/Confirm';
import Form from './components/Form';
import Overview from './components/Overview';
import Places from './components/Places';
import data from './data.json';
import Final from './components/Final';
import { AnimatePresence } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .8, duration: .8 }
    },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
}

const App = () => {
    const [areas, setAreas] = useState([]);
    const [curArea, setCurArea] = useState();
    const [formData, setFormData] = useState();
    const location = useLocation();
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
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route path='/' exact>
                    <Places areas={areas} containerVariants={containerVariants} selected={selected} />
                </Route>
                <Route path='/overview'>
                    <Overview location={curArea} containerVariants={containerVariants} />
                </Route>
                <Route path='/application'>
                    <Form location={curArea} allFormData={handleFormData} containerVariants={containerVariants} />
                </Route>
                <Route path='/confirm'>
                    <Confirm data={formData} containerVariants={containerVariants} />
                </Route>
                <Route path='/final'>
                    <Final data={formData} containerVariants={containerVariants} />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default App;
