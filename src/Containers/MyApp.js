import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // eslint-disable-line
import 'react-tabs/style/react-tabs.css';

import NYTimes from './NYTimes';
import About from './About';
import Stock from '../Stock/index';

class MyApp extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>NYTimes</Tab>
                    <Tab>Stock</Tab>
                    <Tab>About</Tab>
                </TabList>
                <TabPanel>
                    NYTimes
                </TabPanel>
                <TabPanel>
                    <Stock />
                </TabPanel>
                <TabPanel>
                    <About />
                </TabPanel>
            </Tabs>
        );
    }
}

export default MyApp;