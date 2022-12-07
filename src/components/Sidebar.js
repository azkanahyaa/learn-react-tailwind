import Logo from '../images/logo512.png'
import Profil from '../images/office_team.jpg'
import { HiChevronDoubleLeft, HiChevronDown, HiDocumentReport, HiHome } from 'react-icons/hi'

function Sidebar() {
    return (
        <div className="bg-base-2 h-screen w-64 px-3 flex flex-col gap-4 py-2 absolute">
            <div className="flex justify-between align-middle items-center">
                <div className="flex items-center">
                    <img className="flex-none h-5 mr-1" src={Logo}/>
                    <h4 className="font-bold">MyApp01</h4>
                </div>
                <div className="border rounded border-slate-600 text-slate-300"><HiChevronDoubleLeft /></div>
            </div>
            <hr className="border-slate-700"></hr>

            <div className=" bg-base-1 border border-accent-light/50 flex items-center gap-3 rounded-lg px-3 py-2">
                <img className="flex-none h-10 rounded-full" src={Profil} />
                <div className="flex-1">
                    <h4>Eko Haryono</h4>
                    <p>Super Admin</p>
                </div>
                <HiChevronDown />
            </div>
            <div>
                <h5 className="text-slate-300">Analytics</h5>
                <ul className="flex flex-col gap-2 mt-2">
                    <li className="bg-accent-base/10 text-accent-light font-semibold rounded-lg py-2 px-4"><HiHome className="inline mr-2"/>Dashboard</li>
                    <li className=" font-semibold rounded-lg py-2 px-4"><HiDocumentReport className="inline mr-2"/>Report</li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar;