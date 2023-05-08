export default function List() { 
    let 상품 = ["Tomatoes", "Pasta", "Coconut"]
    let 어레이=[2,3,4]
    let wntjr = ["a[0]=100", "console.log(상품[2])", "let a=arr.map((arr[i], i)=>{})"]
    return (
      <div>
        <h4 className="title">상품 목록</h4>
        {
          상품.map((ai)=> {
            return( 
              <div className="food">
                <h4>{ai} $40</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
  
  