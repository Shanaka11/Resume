import { StyledDownload } from '../styled/StyledDownload.styled'

const DownloadBtn = () => {
  return (
        <a
            href='https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/Shanaka+Abeysinghe.pdf'
            download='Shanaka Abeysinghe'
            target='_blank'
        >
            <StyledDownload>Download PDF</StyledDownload>
        </a>
  )
}

export default DownloadBtn