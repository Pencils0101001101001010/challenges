import "./styles.css";

const CouponPage = () => {
  return (
    <div className="coupon-page-container">
      <div className="container-grid-layout">
        <div className="text-area-grid">
          <span className="coupon-header-style"> Save 30% on All Plants</span>
          <span className="description-section">
            Expand your collection with our high-quality plants. Limited time
            only.
          </span>
          <span className="coupon-btn-style">Redeem Coupon</span>
        </div>
        <div className="box-background-style"></div>
      </div>
    </div>
  );
};

export default CouponPage;
