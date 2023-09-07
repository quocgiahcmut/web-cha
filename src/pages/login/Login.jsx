import logoCHA from '~/assets/images/cha-logo.png';
import logoVIAM from '~/assets/images/viam-logo.png'
import './Login.css'

function Login() {
  return (
    <>
      <div className="login__container">
        <div className="login__box">
          <div className="login__header mb-10">
            <h2>HỆ THỐNG THU GIÁM SÁT VÀ THU THẬP DỮ LIỆU</h2>
          </div>
          <div className="login__img mb-40">
            <img height="150px" width="auto" src={logoCHA} alt="viam lab" />
            <img height="150px" width="auto" src={logoVIAM} alt="cha company" />
          </div>
          <button
            className="login__button"
            onClick={() => {}}
            type="button"
          >
            Đăng nhập
          </button>
          <a href="https://facebook.com" className="login__forgot-password">
						Quên mật khẩu?
					</a>
          <span className="login__copyrights">© all copyrights reserved</span>
        </div>
      </div>
    </>
  )
}

export default Login