/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MainLayout from '@components/Layout/MainLayout';
import MDEditor from '@uiw/react-md-editor';
import styles from '../styles.module.scss'
import Button from '@components/Button/Button';

function DescriptionProduct({ minHeight = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const [showButtonExpand, setShowButtonExpand] = useState(false)

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight
      if (fullHeight > minHeight) {
        console.log('code vào đây')
        setShowButtonExpand(true)
        console.log('showButtonExpand')
      }
    }
  }, [minHeight])

  const handleShowDesMore = () => {
    if (expanded){
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  return (
    <>
      <MainLayout>
        <Box sx={{
          width: '100%',
          minHeight: '200px'
        }}>
          <Box sx={{
            p: '9px 15px',
            textAlign: 'center',
            borderBottom: '1px solid #e1e1e1'
          }}>
            <Typography variant='h6' sx={{
              color: 'var(--text-color)',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '25px'
            }}>
              Description
            </Typography>
          </Box>
          <Box sx={{
            maxHeight: expanded ? 'none' : `${minHeight}px`,
            overflow: expanded ? 'visible' : 'hidden',
            transition: 'maxHeight .3s ease',
            p: '16px 16px 50px'
          }}
          ref={contentRef}
          >
            <MDEditor.Markdown source={'Product Description 1'} />
          </Box>
          <Box sx={{
            display: showButtonExpand ? 'flex' : 'none',
            justifyContent: 'center'
          }}>
            <Button content={expanded ? 'Thu gọn' : 'Xem thêm'} type='dark' onClick={handleShowDesMore} style={{ width: '136px'}}/>
          </Box>
        </Box>
      </MainLayout>
    </>
  )
}

export default DescriptionProduct