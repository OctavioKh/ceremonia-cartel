import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { Wrapper, Title, Arrow, Details } from "./styles";

export default ({ title, description, link, description1, description2, description3, description4 }) => {
	const [isVisible, toggle] = useState(false);
	return (
		<Wrapper>
			<Title onClick={() => toggle(!isVisible)}>
				<h4  className="faqshed" style={{textAlign:"left"}}>{title}</h4>
				<span as={ArrowIcon} className="mas" active={isVisible} alt="Arrow" >+</span>
			</Title>
			<Details active={isVisible}>
				<p className="faqstex">{description}</p>
				<p className="faqstex">{description1}</p>
				<p className="faqstex"><a rel="noopener noreferrer" href={link}>{link}</a></p>
				<p className="faqstex">{description2}</p>
				<p className="faqstex">{description3}</p>
				<p className="faqstex">{description4}</p>
			</Details>
			<hr className="hr2"/>
		</Wrapper>
	);
};
