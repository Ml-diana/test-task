import { Spin } from "antd";

const Loading = () => {
    return (
        <div className='spin-wrapper'>
            <Spin tip="Loading" size="large" >
                <div className="content" />
            </Spin>
        </div>
    );
}

export default Loading;