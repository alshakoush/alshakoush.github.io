import 'bootstrap/dist/css/bootstrap.min.css';
import OnsWerk  from './components/OnsWerk';
import CustomNavBar from './components/CustomNavBar';
import Info from './components/Info';

export default function Home () {
  return (
    <div>
      <CustomNavBar />
      <Info/>
      <OnsWerk />
    </div>
  );
}
