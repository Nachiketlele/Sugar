import React from 'react'
import styles from "./Style.module.css";
const SingleItem = () => {
    let a1=JSON.parse(localStorage.getItem("list1"))
    let a2=JSON.parse(localStorage.getItem("list2"))
    let a3=JSON.parse(localStorage.getItem("list3"))
    let a4=JSON.parse(localStorage.getItem("fav"))
    let bigarr=[...a1,...a2,...a3]
    let f=[];
    let id=1;
    {for(let i=0;i<bigarr.length;++i)
        {
            if(bigarr[i].id===id)
            f=bigarr[i]
        }
        }
let favArr=[];
        const thelove = (val) => {
                    
            for (let i = 0; i < a4.length; ++i) {
              if (a4[i].love === false) 
              favArr.push(a4[i]);
            }
            localStorage.setItem("fav", JSON.stringify(favArr));
          };
  return (
    <div>
        <div>
            {/*slide */}
            <div>
                <h3>{f.name}</h3>
                <p>{f.rating}</p>
                <p>₹ {f.price}</p>
                <button>ADD TO CART</button>
                <img
                      id={styles.e1}
                      src={
                        !f.love
                          ? "https://th.bing.com/th/id/R.5365673f66386551fa6df965535bcfa1?rik=UzbBo%2bjcduyTuQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTn%2fXnM%2fKTnXnMAgc.png&ehk=vhGmsnENrQL2IH%2f9jIOSj8tJvVOxXNRhYqiiQMzUQGw%3d&risl=&pid=ImgRaw&r=0"
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                      }
                      alt="no"
                      onClick={() => thelove(f.id)}
                    />
            </div>
        </div>
    </div>
  )
}

export default SingleItem