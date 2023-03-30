import React from 'react';
import '../App.css';
import { Space, Card, Row, Col } from 'antd';
import { useNavigate } from "react-router-dom";

function Templates() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/editor';
        navigate(path);
    }

    return (
            <section className='templates-page'>
                
                <h1>Choose a Template</h1>
                <div className='templates-containter'>
                <Space>
                    <Row align="middle" gutter={[8, 8]} >
                    <Col span={8} />
                    <Card hoverable={true} style={{ width: 325, height: 215, verticalAlign: 'middle'}} onClick={routeChange}>
                        <h3>Simple</h3>
                        <ul className='templates-ul'>
                            <li>Basic sections</li>
                            <li>MD best practices</li>
                            <li>Easy to maintain</li>
                    </ul>
                    </Card>
                    <Col span={0.5} />
                    <Card hoverable={true} style={{ width: 325, height: 215, verticalAlign: 'middle' }} onClick={routeChange}>
                        <h3>Advanced</h3>
                        <ul className='templates-ul'>
                            <li>Basic sections and badges</li>
                            <li>Inline HTML</li>
                            <li>Has a place for everything</li>
                    </ul>
                    </Card>
                    <Col span={8} />
                    <Card hoverable={true} style={{ width: 325, height: 215, verticalAlign: 'middle' }} onClick={routeChange}>
                        <h3>Empty</h3>
                        <ul className='templates-ul'>
                            <li>Make a ReadMe yourself</li>
                    </ul>
                    </Card>
                    <Col span={0.5} />
                    <Card hoverable={true} style={{ width: 325, height: 215, verticalAlign: 'middle' }} onClick={routeChange}>
                        <h3>Edit Existing</h3>
                        <ul className='templates-ul'>
                            <li>Edit existing ReadMe file</li>
                    </ul>
                    </Card>
                    </Row>
                </Space>
                </div>
            </section>
    );
}

export default Templates;