package com.app.captain.domain.dao;


import com.app.captain.domain.dto.GroupDTO;
import com.app.captain.domain.vo.GroupVO;
import com.app.captain.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class GroupDAO {
    private final GroupMapper groupMapper;

    /* 멤버가 개설한 탐험대 가져오기 */
    public List<GroupDTO> findMyRecruit(Long memberId) {
        return groupMapper.selectMyRecruit(memberId);
    }

    /* 멤버가 가입한 탐험대 가져오기 */
    public List<GroupDTO> findMyParticipateRecruit(Long memberId) {
        return groupMapper.selectParticipateRecruit(memberId);
    }

    /* 그룹 개설*/
    public void register(GroupVO groupVO){
        groupMapper.insert(groupVO);
    };

    /* 그룹아이디로 조회 */
    public GroupVO findByGroupId(Long groupId){
        return groupMapper.selectByGroupId(groupId);
    };

    /* 그룹 수정 */
    public void update(Long groupId){
        groupMapper.update(groupId);
    };

    /* 그룹 삭제 */
    public void delete(Long groupId){
        groupMapper.delete(groupId);
    };

    /* 그룹 전체 조회 */
    public List<GroupVO> findAll(){
        return groupMapper.sellectAll();
    };

    /* groupCaptain으로  그롭조회 */
    public GroupVO findByGroupCaptain(Long groupCaptain){
        return groupMapper.selectByCaptain(groupCaptain);
    };

    /* memberId로 groupId조회 */
    public Long findIdByGroupId(Long memberId){
        return groupMapper.selectIdByMemberId(memberId);
    };

    /* groupCaptain으로 groupId조회 */
    public Long findIdByGroupCaptain(Long groupCaptain){
        return groupMapper.selectIdByCaptain(groupCaptain);
    };

    /* 그룹 수 세는 거 */
    public int findCountByGroupId(Long groupId){
        return groupMapper.selectCount(groupId);
    };
}
