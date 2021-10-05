import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls'
import {requiredField} from '../../utils/validators/validators'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import classes from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store'
import {FC} from 'react'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField<LoginFormValuesTypeKeys>('Email', 'email', [requiredField], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [requiredField], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img alt={'captcha'} src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input)}

            {
                error &&
                <div className={classes.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
    password: string
    email: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType> // only strings

export const LoginPage: FC = () => {
    const captchaUrl = useSelector((state: AppStateType)=> state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType)=> state.auth.isAuth)

    const dispatch = useDispatch()


    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
