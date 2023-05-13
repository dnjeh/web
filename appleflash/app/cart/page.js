import Homework from './homework.js';
export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"]
  return (
    <div>
      <Banner content="롯데카드"/>
      <Banner content="삼성카드"/>
      <Banner content="현대카드"/>
      <h4 className="title">Cart</h4>
      <Homework/>
      <CartList item={장바구니[0]} />
      <CartList item={장바구니[1]} />
      <CartList/>

    </div>
  )
} 

function CartList(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Banner(props) {
  return (
    <p className="event">{props.content} 무이자 이벤트중! (~12/32)</p>
  )
}