import React from 'react'
import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/465554645.jpg?k=e3ca7eae33e7e9c596af3742ada80e57a48316403bce5b4b42857eb88925a366&o=&hp=1" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://metrostarapartments.com/wp-content/uploads/2016/07/metro260-72916.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331 Apartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2331 Resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.adarshdevelopers.com/blog/wp-content/uploads/2022/08/Banner-Image-6_-Adarsh-Tranqville-Why-Adarsh-Tranqville-is-the-best-choice-for-Villas-for-sale-in-Hennur.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2331 Resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://assets.architecturaldigest.in/photos/63a458428df6b9fdb924d64c/16:9/w_2240,c_limit/SaffronStays%20Monarch%20Manor1.png" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>2312 Cabins</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://thetravelintern.com/wp-content/uploads/2019/07/Beary-Best-common-area-SG-Budget-Accommodation.jpg.webp" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hostels</h1>
                    <h2>2397 Hostels</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList
