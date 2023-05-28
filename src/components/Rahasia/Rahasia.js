import React, { useState } from 'react'
import './Rahasia.scss'

const Rahasia = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    // const [pertanyaan, setPertanyaan] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }

    // const handleSubmit = (e) => {
    //     // e.preventDefault()
    //     setShow(true);
    // }

    const handleKabar = (props) => {
        if (props === 'baik') {
            console.log(props);
            // console.log(kabar);
            alert(`Alhamdulillah ${name}, semoga selalu sehat`)
        } else if (props === 'buruk') {
            console.log(props);
            // console.log(kabar);
            alert(`Semoga besok lebih baik, ${name}`)
        }
    }

  return (
    <div>
        {
            show === true ? 
            <div className='pertanyaan'>
                <p>Hai <span className='nama'> {name} </span> ,Apa Kabar?</p>
                <button onClick={()=>handleKabar('baik')}>Baik</button>
                <button onClick={()=>handleKabar('buruk')}>Cukup Baik</button>
            </div>
            
            : 
            <>
                <form>
                    <div className="form-group">
                    <h3>Isi dulu nama</h3>
                    {/* <label>Nama</label> */}
                    <input type="text" className="form-control" placeholder="Nama..." onChange={(e)=> handleChange(e)} />
                    </div>
                    <button onClick={()=>setShow(true)}>Submit</button>
                </form>
            </>
        }
    </div>
  )
}

export default Rahasia