import React from 'react';
import CustomNav from '../../Components/CustomNav';
import CustomFooter from '../../Components/CustomFooter';
import CustomLabel from '../../Components/CustomLabel';
import CustomBackButton from '../../Components/CustomBackButton';
import CustomCommentContainer from '../../Components/CustomCommentContainer';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';

class CompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        const { companyId } = this.props.match.params;

        fetch(`https://search-ffre-staging-jhz3wsrmujfb4yexpw5g37fdtm.us-east-1.es.amazonaws.com/loans/_doc/${companyId}`)
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ data: jsonData['_source'] });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { data, comments } = this.state;
        const { companyId } = this.props.match.params;

        if (data === null) {
            return ( null );
        } else {
            return (
                <>
                    <CustomNav />
                    <Container>
                        <CustomBackButton title="Company Search" />
                        <Card className={styles.companyCard}>
                            <Card.Header className={styles.header}>{data['BusinessName']}</Card.Header>
                            <Container className={styles.main}>
                                <Row>
                                    <Col><CustomLabel title="Address" value={data['Address']} /></Col>
                                    <Col><CustomLabel title="City" value={data['City']} /></Col>
                                    <Col><CustomLabel title="State" value={data['State']} /></Col>
                                    <Col><CustomLabel title="Zipcode" value={data['Zip']} /></Col>
                                </Row>
                                <Row>
                                    <Col><CustomLabel title="Business Type" value={data['BusinessType']} /></Col>
                                    <Col><CustomLabel title="Non-Profit" value={data['NonProfit']} /></Col>
                                    <Col><CustomLabel title="NAICS Code" value={data['NAICSCode']} /></Col>
                                    <Col><CustomLabel title="Industry" value={data['NAICSHuman']} /></Col>
                                </Row>
                                <Row>
                                    <Col><CustomLabel title="Loan Range" value={data['LoanRange']} /></Col>
                                    <Col><CustomLabel title="Lender" value={data['Lender']} /></Col>
                                    <Col><CustomLabel title="Congressional District" value={data['CD']} /></Col>
                                    <Col><CustomLabel title="Date Approved" value={data['DateApproved']} /></Col>
                                </Row>
                            </Container>
                        </Card>

                        {/* Comments Section */}
                        <CustomCommentContainer loanId={companyId} />
                    </Container>
                    <CustomFooter />
                </>
            );
        }
    }
}

export default CompanyPage;
