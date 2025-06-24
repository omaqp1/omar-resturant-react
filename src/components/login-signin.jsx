import { useState, useEffect } from 'react';
import styles from '../styles/style-login-signin.module.css';
import { useNavigate } from 'react-router-dom';

function LoginSignin() {
  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [NewuserName, setNewUserName] = useState('');
  const [Newpassword, setNewPassword] = useState('');
  
  const toggleDark = () => {
    setDark(prev => !prev);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem('username') === userName &&
      localStorage.getItem('password') === password
    ) {
      navigate('/Home');
    } else {
      alert('كلمة المرور أو الاسم غير صحيح');
    }
  };
  
  const handleSignup = (e) => {
    e.preventDefault();
    if (NewuserName.trim() !== "" && Newpassword.trim() !== "") {
      localStorage.setItem('username', NewuserName);
      localStorage.setItem('password', Newpassword);
      navigate('/Home');
    } else {
      alert('يرجى إدخال اسم المستخدم وكلمة المرور');
    }
  };
  
  const CommonHeader = () => (
    <header className={`${styles.header} ${dark ? styles.darkMode : ''}`}>
      <div className={styles.changeColor}>
        <h1 className={`fas fa-utensils ${styles.logo}`}>مطعم عمر</h1>
        <label className={styles.switch}>
          <input type="checkbox" onChange={toggleDark} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
  
  return (
    <div className={styles.mainDivLoginSignin}>
      <div className={`${styles.loginPage} ${dark ? styles.darkMode : ''}`}>
        <div className={styles.container0}>
          {CommonHeader()}
          
          <div className={styles.loginBox}>
            <h1>{mode === 'login' ? 'تسجيل دخول' : 'إنشاء حساب'}</h1>
            <form onSubmit={mode === 'login' ? handleLogin : handleSignup}>
              <div className={styles.userBox}>
                {mode === 'login' ? (
                  <>
                    <input
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                      type="text"
                      placeholder="الاسم"
                      required
                      className={styles.input}
                    />
                    <input
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="كلمة المرور"
                      required
                      className={styles.input}
                    />
                  </>
                ) : (
                  <>
                    <input
                      value={NewuserName}
                      onChange={e => setNewUserName(e.target.value)}
                      type="text"
                      placeholder="اسم المستخدم"
                      required
                      className={styles.input}
                    />
                    <input
                      value={Newpassword}
                      onChange={e => setNewPassword(e.target.value)}
                      type="password"
                      placeholder="إنشاء كلمة مرور"
                      required
                      className={styles.input}
                    />
                  </>
                )}
              </div>
              
              <div className={styles.buttonBox}>
                <button type="submit" className={styles.button}>
                  {mode === 'login' ? 'تسجيل دخول' : 'سجّل'}
                </button>
              </div>
              
              <div className={styles.registerBox}>
                {mode === 'login' ? (
                  <h3>
                    ليس لديك حساب؟{' '}
                    <a className={styles.link} onClick={() => setMode('signup')}>انشاء حساب</a>
                  </h3>
                ) : (
                  <h3>
                    عندك حساب؟{' '}
                    <a className={styles.link} onClick={() => setMode('login')}>سجّل دخول</a>
                  </h3>
                )}
              </div>
              
              <div className={styles.socialLinks}>
                <h2 className={`fab fa-facebook-f ${styles.socialIcon}`}></h2>
                <h2 className={`fab fa-google ${styles.socialIcon}`}></h2>
                <h2 className={`fab fa-github ${styles.socialIcon}`}></h2>
              </div>
            </form>
          </div>
          
          <div className={styles.copyright}>
            © 2025 مطعم عمر. جميع الحقوق محفوظة.
          </div>
        </div>
        
        <div className={styles.waveEffect}></div>
      </div>
    </div>
  );
}

export default LoginSignin;