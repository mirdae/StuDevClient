import React, { useState, useEffect, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './OptionsStyle'
import { CheckBox } from '../../element/CheckBox'
import CategoryIcon from '@material-ui/icons/Category'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import {
  changePostTopic,
  changePostOnOff,
  changePostParticipantCountLimit,
} from '../../modules/post'

type OptionsProps = {
  type: 'write' | 'read'
  topics: string[]
  onOff: string[]
  participant_count_limit?: string
  participant_count?: string
}

function Options({
  type,
  topics,
  onOff,
  participant_count,
  participant_count_limit,
}: OptionsProps) {
  const dispatch = useDispatch()
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedOnOff, setSelectedOnOff] = useState<string[]>([])
  const [participantCount, setParticipantCount] = useState()

  const handleInput = ({ target: { value } }: any) => {
    if (isNaN(value)) {
    }
    setParticipantCount(value)
    dispatch(changePostParticipantCountLimit(parseInt(value)))
  }

  const addTopics = (e: any) => {
    const topic = e.target.innerText
    let processedArr: string[]
    if (selectedTopics.includes(topic)) {
      processedArr = selectedTopics.filter((each) => each !== topic)
    } else {
      processedArr = [...selectedTopics, topic]
    }
    setSelectedTopics(processedArr)
    dispatch(changePostTopic(processedArr.join(',')))
  }

  const addOnOff = (e: any) => {
    const type = e.target.innerText
    let processedArr: string[]

    if (selectedOnOff.includes(type)) {
      processedArr = selectedOnOff.filter((each) => each !== type)
    } else {
      processedArr = [...selectedOnOff, type]
    }
    setSelectedOnOff(processedArr)
    dispatch(changePostOnOff(processedArr.join(',')))
  }

  return (
    <S.Container>
      <S.OptionBox>
        <S.Icon>
          <CategoryIcon />
          <span>카테고리</span>
        </S.Icon>
        <S.Topic>
          {type === 'write'
            ? topics.map((topic) => (
                <CheckBox
                  text={topic}
                  key={topic}
                  selected={selectedTopics.includes(topic)}
                  handleClick={addTopics}
                />
              ))
            : topics.map((topic) => (
                <CheckBox text={topic} key={topic} selected={false} />
              ))}
        </S.Topic>
      </S.OptionBox>
      <S.OptionBox>
        <S.Icon>
          <PersonAddIcon />
          <span>모임인원</span>
        </S.Icon>
        <S.Participant>
          {type === 'write' ? (
            <>
              <input
                type="text"
                value={participantCount}
                onChange={handleInput}
              />
              <span>명</span>
            </>
          ) : (
            <S.ShowParticipant>
              <span>{participant_count}</span> / {participant_count_limit}
            </S.ShowParticipant>
          )}
        </S.Participant>
      </S.OptionBox>
      <S.OptionBox>
        <S.Icon>
          <MeetingRoomIcon />
          <span>모임방식</span>
        </S.Icon>
        <S.OnOff>
          {type === 'write'
            ? onOff.map((type) => (
                <CheckBox
                  text={type}
                  selected={selectedOnOff.includes(type)}
                  handleClick={addOnOff}
                  key={type}
                />
              ))
            : onOff.map((type) => (
                <CheckBox text={type} selected={false} key={type} />
              ))}
        </S.OnOff>
      </S.OptionBox>
    </S.Container>
  )
}

export default React.memo(Options)
