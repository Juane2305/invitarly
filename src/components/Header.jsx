
export const Header = () => {
  return (
    <div className="fixed w-full bg-slate-50">
        <section className="flex justify-between items-center px-28 py-6">
            <div className=''>
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1735598759/Logo_Invitarly_1_ttd2sb.png" alt="" className='w-32'/>
            </div>
            <div className="">
                <ul className="flex justify-around space-x-8">
                    <li>Invitaciones</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </section>
    </div>
  )
}
