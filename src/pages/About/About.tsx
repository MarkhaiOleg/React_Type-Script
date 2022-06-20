import React, { useState } from 'react';
import '../../styles/App.css';
import styles from './About.module.css'
import { Button, Col, Row, notification } from 'antd';
import 'antd/dist/antd.css';
import HeaderText from '../../components/HeaderText'

const About: React.FC = () => {
    const [submitLoading, submitSetLoading] = useState<boolean>(false);
    const onSubmitClick = () => {
        submitSetLoading(true);
        setTimeout(() => {
            submitSetLoading(false);
            notification.open({
                message: 'Success',
                description:
                    'and what is so interesting here?',
            });
        }, 2000)
    }

    const [cancelLoading, cancleSetLoading] = useState<boolean>(false);
    const onCancelClick = () => {
        cancleSetLoading(true);
        setTimeout(() => {
            cancleSetLoading(false);
            notification.open({
                message: 'Danger',
                description:
                    'oooooops!!!',
            });
        }, 2000)

    }
    return (
        <>
            <Row>
                <Col span={24}>
                    <HeaderText title="About" />
                </Col>
            </Row>

            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <div className={styles.button}>
                        <Button type="primary" loading={submitLoading} onClick={onSubmitClick}>
                            Submit
                            </Button>
                    </div>
                </Col>

                <Col span={12}>
                    <div className={styles.button}>
                        <Button danger loading={cancelLoading} onClick={onCancelClick}>
                            Cancel
                            </Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default About;
