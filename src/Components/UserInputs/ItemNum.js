import React, {useState, useEffect} from 'react'
import './ItemNum.css'
import Baskets from './Baskets'
import axios from 'axios'
import LevelData from './LevelData'
import arrayData from './arrayData'
import { useDispatch, useSelector } from 'react-redux'
import { assignBasketId } from '../../app/features/counter/CounterSlice'
//import ClassificationType from '../ClassificationTypes/ClassificationType'
import CopyExample from '../CopyExample/CopyExample'
import { NavLink } from 'react-router-dom'


function ItemNum({ i }) {
  const [renderCopyExample, setRenderCopyExample] = useState(false);
  useEffect(() => {
    setRenderCopyExample(true);
  }, []);
  
  const dispatch = useDispatch()
  const [itemName, setItemName] = React.useState("")
  const [itemNum, setItemNum] = React.useState(0)
  //const [isEmpty, setIsEmpty] = React.useState(false)
  //const basketId = useSelector((state) => state.userId.basketId)

  const saveItems = async () => {
    //setIsEmpty(true)
    try{
      const resp = await axios.post(
        'http://100061.pythonanywhere.com/allbaskets/', 
          Baskets
  )

  let res = resp.data.dbInsertedId
  dispatch(assignBasketId(res))
  //setIsEmpty(false)
  console.log(res)
  }catch(err){
    console.log(err.response)
  }
  }
  
  return (
    <div className='itemNum'>
      <div className='itemNumInside'>
      <div className='itemName'>
        <p>Name basket {i}</p>
        <input type='text'
               value={itemName}
               name='itemName'
               onChange={(e) =>setItemName(e.target.value)}
              />
      </div>
      <div className='NumberOfItems'>
        <p>Number of items in basket  {i}</p>
        <input type='Number'
               value={itemNum}
               onChange={(e) =>setItemNum(e.target.value)}/>
      </div>
      </div>
      <div className='levelName'>
        {
          itemNum <= 0 ? "":<LevelData levelName={itemName} inputCount={itemNum}/>
        }
      </div>
      <div className='save'>
        {
          i === arrayData.length ? <button onClick={saveItems}>Save Items </button> : ""
        }
</div>
      {/* <div className='cType'>
         {
           isEmpty && i === arrayData.length ?  <div className='loadingSpinner'></div>: (basketId !== "" && i === arrayData.length ? <ClassificationType />: "")
          }        
   
      </div>
     */}
      {renderCopyExample && <CopyExample />}
      <li className="nav-item">
              <NavLink
              exact
                to="/ClassificationType"
              >
                NextPage
              </NavLink>
        </li>
    </div>
  )
}

export default ItemNum;

