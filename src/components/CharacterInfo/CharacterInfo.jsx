import style from './CharacterInfo.module.scss'

export const CharacterInfo = ({
  name,
  films,
  species,
  homeworld,
  skincolor,
  eyecolor,
  haircolor,
  birthyear,
  height,
  gender,
  mass,
  imageSrc
}) => {
  return (
    <section className={style.characterStyling}>
      <h1>{name}</h1>
      <img src={imageSrc} alt="" />
      <h3>Appeared in:</h3>
      <ul>
      {films.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
      </ul>
      <h3>Species: <span>{species}</span></h3>
      <h3>Homeworld: <span>{homeworld}</span></h3>
      <h3>Born in: <span>{birthyear}</span></h3>
      <h3>Skincolor: <span>{skincolor}</span></h3>
      <h3>Eyecolor: <span>{eyecolor}</span></h3>
      <h3>Haircolor: <span>{haircolor}</span></h3>
      <h3>Height in cm: <span>{height}</span></h3>
      <h3>Gender: <span>{gender}</span></h3>
      <h3>Weight in kg: <span>{mass}</span></h3>
    </section>
  );
};
