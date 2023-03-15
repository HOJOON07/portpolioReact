import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavWrap>
      <LeftBox>
        <HomeIcon>
          <HomeBtn>
            <i />
          </HomeBtn>
        </HomeIcon>
        <SearchWrap>
          <InputWrap>
            <SearchInput />
            <SearchIconWrap>
              <i />
            </SearchIconWrap>
          </InputWrap>
          {/* result는 컴포넌트 */}
          <SearchResult />
        </SearchWrap>
      </LeftBox>
      <RightBox>
        <TerminalIcon>
          <TerminalBtn>
            <i />
          </TerminalBtn>
        </TerminalIcon>
        <FullScrennWrap>
          <FullScreenBtn>
            <i />
          </FullScreenBtn>
        </FullScrennWrap>
      </RightBox>
    </NavWrap>
  );
}
