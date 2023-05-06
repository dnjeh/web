import 'app/globals.css'
export default function CartLayout({ children }) {
  return (
    <div>
        <p className="event">현대카드 무이자 이벤트중! (~12/32)</p>
        {children}
    </div>
  )
}

