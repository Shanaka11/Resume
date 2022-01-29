import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import { Container, MainContainer } from './components/styled/Container.styled';
import { useMediaQuery } from './hooks/useMediaQuery';
import { theme } from './Theme';


function App() {

  const width = useMediaQuery()
  
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        { width === 'mdUp' && <Sidebar />}
        <Container>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam tempore nesciunt commodi sapiente magnam vel aut similique reiciendis quia rerum ullam, assumenda perspiciatis voluptatum officia quam quasi sunt quibusdam, atque omnis nobis. Sequi aliquid autem fuga doloremque fugiat laudantium earum rem odit praesentium veritatis, a aspernatur ad beatae totam reiciendis incidunt amet esse aliquam culpa sunt. Aperiam dolores maiores sunt, quis similique deserunt. Voluptate, perspiciatis porro ratione eius atque, consequatur ullam reprehenderit quo nesciunt id vero consectetur earum repudiandae voluptatem voluptatum suscipit veniam laborum aperiam similique tenetur nobis. Eius, praesentium autem. Odio sint molestias nemo totam corrupti id perspiciatis porro eveniet nulla. Itaque quam architecto ex necessitatibus odio omnis excepturi distinctio voluptate laudantium unde magnam ut impedit tempora repellat perferendis facere sunt magni numquam animi illum ducimus, aliquid ab dolores. Voluptatibus autem praesentium, libero eos non dignissimos ullam nihil! Nulla suscipit eius aspernatur facere corporis neque ullam exercitationem tenetur officiis, nihil cum et adipisci sequi dignissimos voluptatem magni reiciendis cumque quia? Mollitia dolores ratione id porro eaque, praesentium esse voluptatem natus molestias dolore ea ipsam maxime aliquid debitis ex voluptatum beatae dolorum delectus aspernatur veritatis iure! Aspernatur alias autem at mollitia perferendis. Perferendis optio atque quos iusto aut? Maiores, magnam accusamus explicabo ea repellat perferendis praesentium debitis tenetur vero tempora incidunt? Fugit laborum corporis totam porro placeat exercitationem consequatur ex. Pariatur mollitia dolor eveniet aliquid tempore impedit consequuntur similique, quam dignissimos cumque veniam itaque consectetur officiis quasi id laborum! Dignissimos quidem exercitationem dolores laudantium, eius tempora iste laboriosam optio.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ullam voluptatum ducimus eum cupiditate ex voluptas. Recusandae praesentium reiciendis pariatur iste fuga nam sint. Quia, doloribus omnis! Pariatur porro iste deleniti esse numquam! Totam est fuga quae, obcaecati magni ad eveniet dicta necessitatibus assumenda voluptatum voluptatibus alias deleniti iusto impedit consequatur pariatur facilis labore ipsam illum nobis quisquam vitae nam. Dolore vero obcaecati atque. Alias ex, ratione nihil repellendus beatae deleniti rem minus sequi perspiciatis? Corrupti doloremque inventore unde velit delectus laborum numquam cupiditate corporis sapiente aspernatur repellendus modi cum ratione esse, quidem, tempora quam. Quidem dolores est beatae commodi voluptatem obcaecati corporis eaque illum veniam aliquid necessitatibus voluptates labore repellat recusandae quam natus laboriosam ab voluptas, consectetur delectus nesciunt. Odit ratione, sequi tempore eius expedita cupiditate enim mollitia alias fugiat quas quis possimus iusto laudantium recusandae aut voluptatibus aliquid? Reprehenderit accusamus aperiam ut eligendi, incidunt enim? Harum reiciendis corrupti qui nemo? Possimus obcaecati porro minima illum optio quod laboriosam numquam deleniti accusamus recusandae facere sapiente amet officia quos, minus velit nemo, enim soluta quas? Natus, pariatur. Facere ipsum laboriosam, placeat eaque aperiam nemo id assumenda. Obcaecati, tempora. Accusantium tenetur accusamus corrupti optio voluptatem possimus quos! Saepe cumque, quas eius alias, incidunt aperiam fugit obcaecati blanditiis maxime non eaque, odio at. Optio quia, officiis voluptates, expedita tempore cumque eius excepturi distinctio deleniti dolorum vitae suscipit saepe molestiae, debitis non magni. Aliquid quo debitis repudiandae quia! Accusamus corrupti eligendi id, voluptatem illum nemo quod maxime repellendus quas necessitatibus asperiores repellat laudantium deleniti exercitationem modi excepturi quae voluptate aliquid. Dicta officia neque optio, cum deleniti in ea soluta saepe non inventore corrupti laudantium, tempora quae, vel odio? Et, ipsam nemo cum eum necessitatibus eligendi esse itaque unde neque optio explicabo maxime atque debitis recusandae, alias, doloremque nam. Repellat eius autem id consequatur eligendi animi ratione aspernatur enim, facilis nisi quasi quo, sint numquam a sit eos odio, ipsa unde. Ratione enim numquam qui nobis magni excepturi aliquid quas impedit eveniet. Ipsam recusandae, quidem doloribus deleniti facere molestias, eligendi facilis est aut corrupti quisquam esse. Voluptas, nemo totam. Nobis, nulla quidem cupiditate labore deleniti atque voluptas ea iusto commodi hic aperiam at vel consectetur impedit quis. Magni neque possimus eum ab ullam iste quas. Eum minus repellat architecto culpa! Maiores nihil sequi nisi sunt aut. Illum quibusdam excepturi doloribus nemo asperiores iste expedita rerum, pariatur aliquam similique inventore consectetur consequuntur obcaecati quae magni quaerat. Voluptas dolores reprehenderit enim saepe corporis nostrum quia, repellat quasi ex dolorum asperiores, dolore et. Molestias ex reiciendis qui itaque! Perspiciatis minima error exercitationem earum! Dolore quis qui perferendis ipsa dolorem illum sit unde molestias dolores dolorum consequuntur quam quasi sed animi veniam quae, maxime suscipit cum distinctio a. Quidem libero impedit, quod aliquid architecto repellendus. Consequuntur ipsam dolorum commodi nostrum iure corrupti accusantium excepturi officiis aperiam necessitatibus harum maiores dolore quibusdam ipsum suscipit asperiores neque tempore earum, omnis quisquam? Cupiditate blanditiis explicabo praesentium impedit. Odit molestias tenetur ipsam pariatur quo laudantium ducimus iusto in modi. Perspiciatis dicta molestiae at tempora in quis commodi quidem perferendis, consectetur corrupti atque mollitia repellendus! Ea adipisci eligendi praesentium vel, quaerat iusto magnam quos sequi magni laborum, est, ipsum ab labore odit totam similique id aliquam eaque repellendus! Nihil quisquam, enim velit, cupiditate, accusamus consectetur eum non veniam voluptate nemo aut sapiente commodi eligendi nobis laborum saepe id suscipit itaque vel placeat sint veritatis tempore a earum! Voluptates impedit, odio molestiae, fuga velit excepturi perferendis dolorem odit minima natus eos error quos cupiditate sed! Veritatis quo natus mollitia recusandae itaque ea quae voluptates nobis! Repellendus officia similique dolorum architecto pariatur, illum sapiente facilis eius reiciendis esse. Accusamus, earum, commodi architecto aut numquam reprehenderit possimus facilis nihil, consequatur consectetur assumenda fugit fuga ea! Accusamus libero fugit porro laudantium quaerat dolore necessitatibus numquam impedit architecto in sed iste hic, rerum, id nostrum beatae ea harum placeat quibusdam dignissimos a eveniet ut quae dolorem! Non ipsam unde vitae nemo eaque fugiat illum eius velit exercitationem possimus. Esse veniam id, ex amet voluptas ipsa, dolorum inventore porro earum adipisci quod optio non odio? Officiis voluptas nemo pariatur qui ut, minus cum, sed aperiam ratione quis atque quas eius dolore labore tempore alias adipisci sunt laboriosam recusandae quasi sint dicta accusantium! Natus aliquid impedit, aliquam perferendis repellat eum sed ex, obcaecati magnam reiciendis ea quos voluptatem voluptate expedita tempora saepe sit soluta asperiores! Accusantium voluptas tempora error quo tempore. Voluptatem, beatae tempora in commodi ipsum accusantium autem esse cupiditate enim repellendus provident eos consequuntur nisi officiis eveniet, facilis amet debitis explicabo assumenda. Ab porro nostrum doloribus mollitia? Pariatur quod alias nobis iste quas inventore in corrupti repellat harum vel sunt eos rem veniam explicabo minus cum, a numquam impedit maiores! Exercitationem nam, doloremque quis explicabo, animi mollitia dicta sapiente commodi, quam tempore illum nemo. Itaque, nesciunt? Ex, distinctio. Voluptatibus, impedit. Aliquid exercitationem repellat, amet blanditiis quidem suscipit vero minima officia dolor doloremque est laborum distinctio esse explicabo? Eaque at ducimus ut! Sunt iusto porro impedit placeat iure totam beatae aliquid voluptates iste, accusamus, eum libero itaque, quibusdam dolorum sit. Nobis neque, corrupti quisquam ratione eius inventore, tempora cum consequuntur libero veritatis quis voluptas accusantium vel laudantium dolorum quas consequatur saepe debitis molestiae? Ratione nemo quod aliquam neque corporis impedit illo alias expedita nam consequuntur rem, exercitationem veniam omnis, sequi beatae fugit inventore tempora quia doloremque facilis. Cupiditate in harum ipsam nemo dolore temporibus quod. Quidem, veniam? Voluptatum at similique hic doloribus aliquam animi enim corporis qui minus fuga ipsam eius inventore explicabo dolor perferendis placeat saepe quaerat, consectetur nobis assumenda doloremque voluptates repellendus non culpa. Quae sunt impedit, officia nobis modi quos rem hic, neque adipisci exercitationem quis molestiae itaque illo natus, quibusdam et fuga. Expedita aliquam voluptate voluptatum cumque facere optio? Autem debitis quia id quae, doloremque fugit, accusamus expedita voluptate reiciendis dignissimos assumenda vitae ad tenetur. Quibusdam illum soluta minus dolorum quaerat molestiae eos possimus. Aspernatur minus aliquid adipisci magnam reprehenderit suscipit officia, perspiciatis unde impedit earum eligendi quis quo repudiandae, corporis omnis minima fugiat tenetur.</p>
        </Container>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
