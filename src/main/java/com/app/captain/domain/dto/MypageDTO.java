package com.app.captain.domain.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class MypageDTO {
    private Long memberId;
    private String memberIdentification;
    private String memberPassword;
    private String memberEmail;
    private String memberName;
    private String memberNickName;
    private String memberPhone;
    private String memberBirth;
    private String memberGender;
    private boolean memberStatus;
    private String memberFileOriginalName;
    private String memberFileUuid;
    private String memberFilePath;
    private String memberFileSize;
    private boolean memberFileType;
    private Long groupReplyId;
    private String groupReplyContent;
    private String groupReplyRegisterDate;
    private String groupReplyUpdateDate;
    private Long groupId;

}
