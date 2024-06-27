import { Button, Input, Toast } from 'antd-mobile';
import { useState } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   fetch('https://business.chenji.online/api/readData')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('获取数据库data:', data);
  //     });
  // }, []);
  const [value, setValue] = useState('');
  const [res, setRes] = useState('');
  const decodeJwt = () => {
    try {
      const list = value.split('.');
      const token = list[1];
      setRes(atob(token));
    } catch (e) {
      Toast.show({
        icon: 'fail',
        content: '输入不满足 jwt 格式',
      });
    }
  };
  return (
    <div className="App">
      <h2>JWT 解析</h2>
      <div>
        <b>输入 JWT：</b>
        <Input
          style={{ marginTop: 10 }}
          placeholder="请输入JWT内容"
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </div>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <Button
          color="primary"
          fill="solid"
          style={{ width: 300 }}
          onClick={decodeJwt}
        >
          解析
        </Button>
      </div>
      <div style={{ marginTop: 40 }}>{res}</div>
      <p class="beian">
        <a
          href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030002003944"
          target="_blank"
          rel="noreferrer"
        >
          粤公网安备44030002003944号
        </a>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer" style={{marginLeft: 20}}>
          粤ICP备2024262941号
        </a>
      </p>
    </div>
  );
}

export default App;

