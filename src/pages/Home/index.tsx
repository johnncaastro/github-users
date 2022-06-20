import { FormEvent, useContext } from 'react';
import { useUser } from '../../hooks/useUser';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { VscGithubInverted } from 'react-icons/vsc';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

import { Container } from './styles';

interface HomeProps {
  toogleTheme(): void;
}

export function Home({ toogleTheme }: HomeProps) {
  const { user, SearchGitHubUser, inputName, setInputName } = useUser();

  const { colors, title } = useContext(ThemeContext);

  function handleSearchGitHubUser(event: FormEvent) {
    event.preventDefault();

    SearchGitHubUser();
  }

  return (
    <Container>
      <header className='header-container'>
        <VscGithubInverted size={38} color={colors.text} />

        <h1>GitHub Users</h1>

        <div className='switch-container'>
          <span>Tema escuro</span>
          <Switch
            onChange={toogleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={15}
            handleDiameter={20}
            offColor={'#475569'}
            onColor={colors.secondary}
          />
        </div>
      </header>
      <main>
        <div className='card'>
          <img src={user?.avatar_url} alt="foto de perfil do GitHub" />

          <h2>{user?.name}</h2>
          <span>{user?.login}</span>

          <p>{user?.bio}</p>

          <div className='followers'>
            <FiUsers size={12} color={colors.text} />
            <p>{user?.followers} seguidores . {user?.following} seguindo</p>
          </div>

          <div className='location'>
            <MdLocationOn size={12} color={colors.text} />
            <p>{user?.location}</p>
          </div>
        </div>

        <form onSubmit={handleSearchGitHubUser}>
          <label htmlFor="login">Username</label>
          <input
            type="text"
            id='login'
            value={inputName}
            onChange={event => setInputName(event.target.value)}
          />

          <button type='submit'>
            <BiSearchAlt size={18} color={colors.text} />
          </button>
        </form>
      </main>
    </Container>
  )
}