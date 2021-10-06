import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import TrItem from "../components/TrItem";
import { fetchData } from "../store/action";

export default function Item() {
    const { items } = useSelector(store => store)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <>
            {/* Offcanval Overlay */}
            <div className="offcanvas-overlay"></div>
            {/* Offcanval Overlay */}

            {/* Wrapper */}
            <div className="wrapper">

                {/* Header */}
                <Headers />
                {/* End Header */}

                {/* Main Wrapper */}
                <div className="main-wrapper">
                    {/* Sidebar */}
                    <Sidebar />
                    {/* End Sidebar */}

                    {/* Main Content */}
                    <div className="main-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mb-30">
                                        <div className="card-body pt-30">
                                            <h4 className="font-20 ">Items</h4>
                                        </div>
                                        <div className="table-responsive">
                                            {/* Invoice List Table */}
                                            <table className="text-nowrap hoverable dh-table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>City</th>
                                                        <th>Price</th>
                                                        <th>Image</th>
                                                        <th>Detail</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        items.map(el => {
                                                            return <TrItem key={el.id} el={el} />
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                            {/* End Invoice List Table */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Content */}
                </div>
                {/* End Main Wrapper */}

                {/* Footer */}
                <Footer />
                {/* End Footer */}
            </div>
            {/* End wrapper */}
        </>
    )
}