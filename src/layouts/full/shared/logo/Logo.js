// import { Link } from 'react-router-dom';
// import LogoDark from 'src/assets/images/logos/profile_img.png';
// import { styled } from '@mui/material';
//
// const LinkStyled = styled(Link)(() => ({
//   height: '70px',
//   width: '180px',
//   overflow: 'hidden',
//   display: 'block',
// }));
//
// const Logo = () => {
//   return (
//     <LinkStyled to="/dashboard/view-profile">
//       <LogoDark height={70} />
//       {/*<i className="bi bi-person-circle" height={70}> </i>*/}
//     </LinkStyled>
//   )
// };
//
// export default Logo;

import { Link } from 'react-router-dom';
import LogoDark from 'src/assets/images/logos/profile_img-removebg-preview.png';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
      <LinkStyled to="/dashboard/view-profile">
        <div className="d-flex justify-content-center rounded-2 mt-xl-1 mb-xl-0">
            <img src={LogoDark} alt="Logo" height={70} />
        </div>
        {/*<i className="bi bi-person-circle" height={70}> </i>*/}
      </LinkStyled>
  );
};

export default Logo;

