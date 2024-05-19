import React from 'react'
import LineageTreeStyles from '../../lineage-tree/styles/LineageTreeStyle.module.css'
import MiniLineageTreeStyles from '../styles/MiniLineageTreeStyles.module.css'
import { LeanLineageNode } from '../../../types'
import { useDispatch } from 'react-redux'
import { toggleInfoCardOn } from '../InfoCardSlice'
import EditableTreeNode from '../../../components/EditableItemCardInfo'
import TreeNodeInfo from '../../lineage-tree/components/TreeNodeInfo'
import ItemCard from '../../../components/ItemCard'
import CardStyles from '../../../styles/cardAndListStyles.module.css'
type Props = {
  mother: LeanLineageNode
  father: LeanLineageNode
  child: {
    id: string,
    image: string,
    name: string
  }
  handleChangeParents: (mother: LeanLineageNode, father: LeanLineageNode) => void
}

const MiniLineageTree:React.FC<Props> = ({mother, father, child, handleChangeParents}) => {
  const dispatch = useDispatch()
  const displayInfoCard = (id?: string) => {
    dispatch(toggleInfoCardOn({itemId: id}))
  }

  const handleChangeMother = (item: LeanLineageNode) => {
    handleChangeParents(item, father)
  }

  const handleChangeFather = (item: LeanLineageNode) => {
    handleChangeParents(mother, item)
  }
  

  return (
    <div className={MiniLineageTreeStyles.microTreeContainer}>
      <ul className={MiniLineageTreeStyles.subUlContainer}>
        <li className={MiniLineageTreeStyles.subLiContainer}>
          <div className={MiniLineageTreeStyles.parentsContainer}>
            <div>
              {/* <span className={InfoCardStyles.group}>
                (
                  <span>focus node</span>
                )
              </span> */}
              <ItemCard
                image={mother?.image} 
                id={mother?.id || ""} 
                imageDimensions={{width: 176}}
                sizeStyles={CardStyles.smallCardSize}
              >
                <EditableTreeNode key={mother.name + Date.now()} name={mother?.name || "???"} handleChangeNode={handleChangeMother}/>
              </ItemCard>

            </div>
            <div className={`${LineageTreeStyles.fatherContainer} fadeInElement`}>
              {/* <span className={InfoCardStyles.group}>
                (
                  <span>focus node</span>
                )
              </span> */}
              <ItemCard 
                image={father?.image} 
                id={father?.id || ""} 
                imageDimensions={{width: 176}}
                sizeStyles={CardStyles.smallCardSize}
              >
                <EditableTreeNode key={father.name + Date.now()} name={father?.name || "???"} handleChangeNode={handleChangeFather}/>
              </ItemCard>
            </div>
          </div>
          <ul className={MiniLineageTreeStyles.subUlContainer}>
            <li className={MiniLineageTreeStyles.subLiContainer}>
              <div>
                {/* <span className={InfoCardStyles.group}>
                  (
                    <span>focus node</span>
                  )
                </span> */}
                <ItemCard
                  handleClick={child?.id ? () => displayInfoCard(child.id) : () => {}} 
                  image={child.image} 
                  id={child?.id || ""} 
                  imageDimensions={{width: 176}}
                  sizeStyles={CardStyles.smallCardSize}
                >
                  <TreeNodeInfo name={child?.name || "???"}/>
                </ItemCard>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default MiniLineageTree