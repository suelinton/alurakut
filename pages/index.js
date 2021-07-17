import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ImgGit({ user }) {
  const githubPic = `https://github.com/${user}.png`;

  return (
    <img src={githubPic} style={{ borderRadius: '8px' }} />
  )
}

function ProfileSidebar(prop) {
  return (
    <Box>
      <ImgGit user={prop.gitHubUser} />
    </Box>
  )
}

export default function Home() {
  const gitUser = "suelinton";
  const pessoasComunidade = ['suelinton', 'peas', 'juunegreiros', 'omariosouto'];

  return (
    <>
      <AlurakutMenu githubUser={gitUser} />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar gitHubUser={gitUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
            Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidades ({pessoasComunidade.length})
            </h2>

            <ul>
              {pessoasComunidade.map((itemAtual, index) => {
                return (
                  <li key={index} >
                    <a href={`/users/${itemAtual}`} >
                      <ImgGit user={itemAtual} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
