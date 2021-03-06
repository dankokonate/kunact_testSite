/**
 * External dependencies
 */
import {
	OrderSummary,
	TotalsCoupon,
	TotalsDiscount,
	TotalsFooterItem,
	TotalsShipping,
} from '@woocommerce/base-components/cart-checkout';
import {
	Subtotal,
	TotalsFees,
	TotalsTaxes,
	ExperimentalOrderMeta,
	TotalsWrapper,
} from '@woocommerce/blocks-checkout';

import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useShippingDataContext } from '@woocommerce/base-context';
import {
	useStoreCartCoupons,
	useStoreCart,
} from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */

const Block = ( {
	showRateAfterTaxName = false,
	className,
}: {
	showRateAfterTaxName: boolean;
	className?: string;
} ): JSX.Element => {
	const { cartItems, cartTotals, cartCoupons, cartFees } = useStoreCart();
	const {
		applyCoupon,
		removeCoupon,
		isApplyingCoupon,
		isRemovingCoupon,
	} = useStoreCartCoupons();

	const { needsShipping } = useShippingDataContext();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	// Prepare props to pass to the ExperimentalOrderMeta slot fill.
	// We need to pluck out receiveCart.
	// eslint-disable-next-line no-unused-vars
	const { extensions, receiveCart, ...cart } = useStoreCart();
	const slotFillProps = {
		extensions,
		cart,
	};

	return (
		<div className={ className }>
			<TotalsWrapper>
				<OrderSummary cartItems={ cartItems } />
			</TotalsWrapper>
			<TotalsWrapper>
				<Subtotal currency={ totalsCurrency } values={ cartTotals } />
				<TotalsFees currency={ totalsCurrency } cartFees={ cartFees } />
				<TotalsDiscount
					cartCoupons={ cartCoupons }
					currency={ totalsCurrency }
					isRemovingCoupon={ isRemovingCoupon }
					removeCoupon={ removeCoupon }
					values={ cartTotals }
				/>
			</TotalsWrapper>
			{ getSetting( 'couponsEnabled', true ) && (
				<TotalsWrapper>
					<TotalsCoupon
						onSubmit={ applyCoupon }
						initialOpen={ false }
						isLoading={ isApplyingCoupon }
					/>
				</TotalsWrapper>
			) }
			{ needsShipping && (
				<TotalsWrapper>
					<TotalsShipping
						showCalculator={ false }
						showRateSelector={ false }
						values={ cartTotals }
						currency={ totalsCurrency }
					/>
				</TotalsWrapper>
			) }
			{ ! getSetting( 'displayCartPricesIncludingTax', false ) &&
				parseInt( cartTotals.total_tax, 10 ) > 0 && (
					<TotalsWrapper>
						<TotalsTaxes
							currency={ totalsCurrency }
							showRateAfterTaxName={ showRateAfterTaxName }
							values={ cartTotals }
						/>
					</TotalsWrapper>
				) }
			<TotalsWrapper>
				<TotalsFooterItem
					currency={ totalsCurrency }
					values={ cartTotals }
				/>
			</TotalsWrapper>
			<ExperimentalOrderMeta.Slot { ...slotFillProps } />
		</div>
	);
};

export default Block;
