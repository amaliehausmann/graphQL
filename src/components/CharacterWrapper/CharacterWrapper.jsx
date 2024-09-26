import style from './CharacterWrapper.module.scss'

export const CharacterWrapper = ({children}) => {
  return (
    <div className={style.wrapperStyling}>
        {children}
    </div>
  )
}
