import logoCHA from '~/assets/images/cha-logo.png'
import logoVIAM from '~/assets/images/viam-logo.png'
import './Login.scss'
import clsx from 'clsx'
import styles from '~/pages/login/Login.module.scss'

import React from 'react'

function Login() {
  return (
    <>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.box)}>
          <div className={clsx(styles.header, "mb-10")}>
            <h2>HỆ THỐNG THU GIÁM SÁT VÀ THU THẬP DỮ LIỆU</h2>
          </div>
          <div className={clsx(styles.img, "mb-40")}>
            <img height="150px" width="auto" src={logoCHA} alt="viam lab" />
            <img height="150px" width="auto" src={logoVIAM} alt="cha company" />
          </div>
          <button
            className={clsx(styles.btn)}
            onClick={() => {}}
            type="button"
          >
            Đăng nhập
          </button>
          <a href="" className={clsx(styles.forgot_password)}>
						Quên mật khẩu?
					</a>
          <span className={clsx(styles.copyrights)}>© all copyrights reserved</span>
        </div>
      </div>
    </>
  )
}

export default Login