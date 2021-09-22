import { css } from '@emotion/css'

const color = 'white'
const styles = css({
  padding: '32px',
  backgroundColor: 'hotpink',
  fontSize: '24px',
  borderRadius: '4px',
  '&:hover': {
    color
  }
})

const root = document.getElementById('root')

if(root) {
  root.classList.add(styles)
}
