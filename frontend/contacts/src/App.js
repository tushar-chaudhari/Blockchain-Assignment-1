import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from './configEVContract';
import 'semantic-ui-css/semantic.min.css'
import { Select } from 'semantic-ui-react'

function App() {
  const [dataNew2 , setDataNew2] = useState();
  const { ethereum } = window;
  const [account, setAccount] = useState();
  
  const [selected,setselected] = useState(null);
  const [rangeInput, setRangeInput]=useState();
  const [dorCInput, setDOrCInput]=useState();
  const [isFS, setFS] = useState(false);
  const [isLC, setLC] = useState(false);
  const [lengthOfAllotedStations,setLengthOfAllotedStations] = useState();
  const [showList,setShowList] = useState(false);
 
  const rangeOptions = [
    { key: 'af', value: 'af', text: '1-50' },
    { key: 'ax', value: 'ax', text: '51-100' },
    { key: 'al', value: 'al', text: '101-150' }
  ]

  const distanceOrCostoptions = [
    { key: 'af', value: 'af', text: 'Less Distance' },
    { key: 'ax', value: 'ax', text: 'Less Price per Unit' },
  ]

  const toggle = (i) => {
    if(selected == i){
      return setselected(null);
    }
    setselected(i);
  }

  useEffect(() => {
    accessToMetamask();
    accessToContract();
  }, []);

  const accessToMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        setAccount(accounts[0]);
        console.log("Account is  : ",account);
    }
  }

  const accessToContract = async () => {
      window.web3 = await new Web3(window.ethereum);
      window.contract = await new window.web3.eth.Contract( CONTACT_ABI, CONTACT_ADDRESS); 
      console.log("Connected to Smart contract !");
  }

  const handleChangeRange = (e) => {
    let value = e.target.children[0].textContent;
    if(value.includes("50")){
      setRangeInput(25);
    }else if(value.includes("100")){
      setRangeInput(75);
    }else{
      setRangeInput(125);
    }
  }

  const handleChangePreference = (e) => {
    let value = e.target.children[0].textContent.toLowerCase();
    if(value.includes("distance")){
      setDOrCInput("distance");
    }else{
      setDOrCInput("cost");
    }
  }

  const suggestEVStation  = async (e) => {
    e.preventDefault();

    await window.contract.methods.suggestChargingStation(rangeInput,dorCInput,isFS,isLC).send({from : account});

    const data = await window.contract.methods.getCurrentRequestData().call();

    setLengthOfAllotedStations(data.allotedChargingStations.length);
    const dataLat = [];
    for (let i = 0; i < data.allotedChargingStations.length; i++) {
      
      let indexOfStation = data.allotedChargingStations[i];
      const data1 = await window.contract.methods.getChargingStationDetails(indexOfStation).call(); 
        const obj = {};

        if (!Object.keys(obj).length) {
            Object.assign(obj, { station_name: data1.station_name, distance_to_station: data1.remaining_distance,price_per_unit : data1.price_per_unit,waiting_cars: data1.count_of_waiting_cars,fast_charging_support : data1.fast_charging, other_company_station : data1.other_company_station, ratings :data1.rating});
        }
        dataLat.push(obj);
    }

    setDataNew2(dataLat);
    setFS(false);
    setLC(false);
    setShowList(true);
  }

  return (
    <div>
         <div className="ui container center aligned">
            <h2 className="ui green header">Electric Charging Station Finder</h2>
          </div><br />
          <form>
              <div className="ui two column centered grid">

                <div className="eight column centered row">
                  <div className="column"><h3>Remaining Range</h3></div>
                  <div className="column"><Select placeholder='Remaining Range' options={rangeOptions}
                    onChange={handleChangeRange} /></div>
                </div>

                <div className="eight column centered row">
                  <div className="column"> <h3>Preference</h3></div>
                  <div className="column"><Select placeholder='Distance or Cost' options={distanceOrCostoptions}
                    onChange={handleChangePreference} /></div>
                </div>

                <div className="eight column centered row">
                  <div className="column">
                    <div className="ui checkbox">
                      <input type="checkbox"
                        name="example" checked={isFS} onChange={e => setFS(e.target.checked)} />
                      <label>Fast charging</label></div></div>
                  <div className="column">
                    <div className="ui checkbox">
                      <input type="checkbox"
                        name="example" checked={isLC} onChange={e => setLC(e.target.checked)} />
                      <label>Other Brand Charging Station</label>
                    </div>
                  </div>
                </div>

                <div className="sixteen column centered row">
                  <div className="column">
                    <div><button className="ui primary button" onClick={suggestEVStation}>Find</button></div>
                  </div>
                </div>
                
                {showList ?  
                (
                  <div className="four column centered row"> 
                  <div className='column centered aligned'>Charging Stations Sumary</div> <br />
                    <div className="column">
                      <div className="wrapper">
                        <div className="accordion">
                          {dataNew2.map((item,i) => (
                            <div className="item">
                              <div className="titleStation" onClick={() => toggle(i)}>
                                <h2>{item.station_name}</h2>
                                <span>{selected == i ? '-' : '+'}</span>
                                </div>
                              <div className={selected == i ? 'content show' : 'content'}>
                                Distance to charging Station : {item.distance_to_station} Km<br />
                                Price per unit : {item.price_per_unit} Rs<br />
                                Number of cars already in Queue : {item.waiting_cars} <br />
                                Fast Charging Supported : {item.fast_charging_support ? "Fast Charging Supported" : "No Fast Charging"} <br />
                                TATA Ev charging Staion : {item.other_company_station ? "Yes" : "No"}<br />
                                Rating : {item.ratings} out of 5<br/>
                                </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : null}
              </div>
            </form>
    </div>
  );
}

export default App;