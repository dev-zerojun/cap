/* mypageUpdate.html */

/* 변경하기 버튼 */
const $changeButtons = $('.change-button');
/* 저장 버튼 */
const $saveButton = $('.save-button');
/* 닉네임, 생년월일 inputbox */
const $inputUsers = $('.change-value');
/* 닉네임 inputbox */
const $inputNickname = $("input[name='memberNickname']")
/* 생년월일 inputbox */
const $inputBirth = $("input[name='memberBirth']");
/* 닉네임 정규식 */
const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
/* 생일 정규식 */
const birthRegex = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
/* 경고문구 */
const $warnText = $(".warn-text");

let nicknameCheck = true;
let birthCheck = true;
let saveChecks = [false, false];


$(".modal").hide();

/* 닉네임 포커스 이벤트 */
$inputNickname.on('focus', function () {
  $inputNickname.css("border", "1px solid black");
});

/* 생년월일 포커스 이벤트 */
$inputBirth.on('focus', function () {
  $(this).val($(this).val().replaceAll('.', ''));
  $inputBirth.css("border", "1px solid black");
});

/* 닉네임 검사 */
$inputNickname.on('blur', function () {
  let value = $(this).val();
  /* 닉네임 비어있으면 입력하라는 경고 문구 */
  if (!value) {
    $warnText.show();
		$warnText.eq(0).text("닉네임을 입력하세요.");
    $inputNickname.css("border", "1px solid rgb(222, 28, 34)");
		nicknameCheck = false;
		return;
	}
  /* 정규식 검사 */
  nicknameCheck = nicknameRegex.test($(this).val());
  if(nicknameCheck){
    $warnText.hide();
    $inputNickname.css("border", "1px solid rgb(238, 238, 238)");
  }else{
    $warnText.show();
    $warnText.eq(0).text("영문 혹은 영문과 숫자를 조합하여 4자~20자로 입력해주세요.");
    $inputNickname.css("border", "1px solid rgb(222, 28, 34)");
  }
});

/* 생년월일 검사 */
$inputBirth.on('blur', function () {
  let value = $(this).val();
  /* 생년월일 비어있으면 입력하라는 경고 문구 */
  if (!value) {
    $warnText.show();
		$warnText.eq(1).text("생년월일을 입력하세요.");
    $inputBirth.css("border", "1px solid rgb(222, 28, 34)");
		birthCheck = false;
		return;
	}
  
  /* 생년월일 정규식 검사 */
  birthCheck = birthRegex.test($(this).val());
  if (birthCheck) {
    $warnText.hide();
    $(this).val($(this).val().replace(/^(\d{4})(\d{2})(\d{2})$/, `$1.$2.$3`));
    $inputBirth.css("border", "1px solid rgb(238, 238, 238)");
  }else{
    $warnText.show();
    $warnText.eq(1).text("생년월일을 확인하세요.");
    $inputBirth.css("border", "1px solid rgb(222, 28, 34)");
  }
});

/* 변경하기 클릭 이벤트 */
$changeButtons.on('click', function () {
  let i = $changeButtons.index($(this));
  /* 변경하기 클릭하면 inputbox focus되면서 입력 가능 */
  $inputUsers.eq(i).attr('disabled', false);
  $inputUsers.eq(i).focus();
});

/* 저장 버튼 클릭 이벤트 */
$saveButton.on('click', function () {
  let modalMessage = "";
  /* 닉네임check false면 다시 입력하라는 모달창 */
  if(!nicknameCheck){
    modalMessage = "닉네임을 다시 입력하세요.";
    showWarnModal(modalMessage);
    return;
  }
  /* 생알check false면 다시 입력하라는 모달창 */
  else if(!birthCheck){
    modalMessage = "생일을 다시 입력하세요.";
    showWarnModal(modalMessage);
    return;
  }
  /* 닉네임, 생일check 둘 다 true면 저장되었다는 모달창 */
  modalMessage = "저장되었습니다."
  showWarnModal(modalMessage);
});

/* 모달창 */
let modalCheck;
function showWarnModal(modalMessage) {
	modalCheck = false;
	$("div.modal-content").html(modalMessage)
	$("div.warn-modal").css("animation", "popUp 0.5s");
	$("div.modal").css("display", "flex").hide().fadeIn(500);
	setTimeout(function() { modalCheck = true; }, 500);
}

$("#mypageUpdate").on("click", function() {
	if (modalCheck) {
		$("div.warn-modal").css("animation", "popDown 0.5s");
		$("div.modal").fadeOut(500);
	}
});

